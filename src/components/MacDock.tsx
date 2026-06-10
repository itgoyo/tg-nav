import { useEffect, useRef } from 'react'

type DockItem = {
  name: string
  url: string
  icon: string
  running?: boolean
}

const leftItems: DockItem[] = [
  {
    name: 'XBSO',
    url: 'https://t.me/xbso?start=a_7202424896',
    icon: 'https://telegram.0xnav.com/wp-content/uploads/2026/05/1778553818-xbso.jpg',
    running: true,
  },
  {
    name: 'SOSO',
    url: 'https://t.me/soso?start=a_6294881820',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/soso.png',
    running: true,
  },
  {
    name: 'JISO',
    url: 'https://t.me/jiso?start=a_6294881820',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/jiso.png',
  },
  {
    name: 'JISOU',
    url: 'https://t.me/jisou?start=a_7202424896',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/jisou.png',
  },
  {
    name: 'CJSY',
    url: 'https://t.me/CJSY?start=7202424896',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/cjsy.png',
  },
  {
    name: 'SMSS',
    url: 'https://t.me/smss?start=spread_7202424896',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/smss.png',
  },
]

const rightItems: DockItem[] = [
  {
    name: '快搜',
    url: 'https://t.me/kuai?start=ad_7202424896',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/kuai.png',
  },
  {
    name: '修女',
    url: 'http://t.me/tgxiunv',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/xiunv.png',
    running: true,
  },
  {
    name: '彩虹',
    url: 'https://faka.tg10000.com',
    icon: 'https://tgbaike.com/wp-content/uploads/2026/03/telegram/caihong.png',
  },
]

const BASE = 54
const MAX = 78
const RANGE = 200

function sizeForDist(dist: number) {
  if (dist >= RANGE) return BASE
  const t = (Math.cos((dist / RANGE) * Math.PI) + 1) / 2
  return BASE + (MAX - BASE) * t
}

export default function MacDock() {
  const dockRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dock = dockRef.current
    if (!dock) return

    const items = Array.from(dock.querySelectorAll<HTMLElement>('.dock-item'))
    const icons = items
      .map((item) => item.querySelector<HTMLImageElement>('.dock-icon'))
      .filter((img): img is HTMLImageElement => Boolean(img))

    let raf: number | null = null
    let active = false
    let leaveTimer: number | null = null

    const setIconSize = (img: HTMLImageElement, size: number) => {
      const px = `${size}px`
      img.style.width = px
      img.style.height = px
    }

    const onEnter = () => {
      active = true
      if (leaveTimer) {
        window.clearTimeout(leaveTimer)
        leaveTimer = null
      }
      dock.classList.remove('leaving')
    }

    const onMove = (e: MouseEvent) => {
      if (!active) return
      if (raf) cancelAnimationFrame(raf)
      const mx = e.clientX
      raf = requestAnimationFrame(() => {
        items.forEach((item, i) => {
          const rect = item.getBoundingClientRect()
          const cx = rect.left + rect.width / 2
          setIconSize(icons[i], sizeForDist(Math.abs(mx - cx)))
        })
      })
    }

    const onLeave = () => {
      active = false
      if (raf) cancelAnimationFrame(raf)
      dock.classList.add('leaving')
      icons.forEach((img) => setIconSize(img, BASE))
      if (leaveTimer) window.clearTimeout(leaveTimer)
      leaveTimer = window.setTimeout(() => {
        dock.classList.remove('leaving')
      }, 500)
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const item = target.closest('.dock-item') as HTMLElement | null
      if (!item) return
      const img = item.querySelector('.dock-icon') as HTMLImageElement | null
      if (!img) return

      img.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-22px)' },
          { transform: 'translateY(0)' },
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0)' },
        ],
        { duration: 550, easing: 'ease-in-out' },
      )
    }

    dock.addEventListener('mouseenter', onEnter)
    dock.addEventListener('mousemove', onMove)
    dock.addEventListener('mouseleave', onLeave)
    dock.addEventListener('click', onClick)

    return () => {
      dock.removeEventListener('mouseenter', onEnter)
      dock.removeEventListener('mousemove', onMove)
      dock.removeEventListener('mouseleave', onLeave)
      dock.removeEventListener('click', onClick)
      if (raf) cancelAnimationFrame(raf)
      if (leaveTimer) window.clearTimeout(leaveTimer)
    }
  }, [])

  return (
    <div className="fam-dock-fixed" aria-label="快速入口 Dock">
      <div className="fam-dock-wrap">
        <div className="dock" id="fam-dock" ref={dockRef}>
          {leftItems.map((item) => (
            <div
              className={`dock-item${item.running ? ' running' : ''}`}
              key={item.name}
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="dock-icon"
                  src={item.icon}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <span className="dot" />
              <span className="tooltip">{item.name}</span>
            </div>
          ))}

          <div className="dock-divider" />

          {rightItems.map((item) => (
            <div
              className={`dock-item${item.running ? ' running' : ''}`}
              key={item.name}
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="dock-icon"
                  src={item.icon}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <span className="dot" />
              <span className="tooltip">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
