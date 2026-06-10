import { createFileRoute } from '@tanstack/react-router'
import { sections, siteConfig } from '../data/navData'
import MacDock from '../components/MacDock'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-10 pt-10 sm:pt-12">
      <section className="island-shell rounded-3xl p-6 sm:p-8 lg:p-10">
        <p className="island-kicker mb-2">Telegram 中文导航</p>
        <h1 className="display-title text-3xl leading-tight font-bold sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--sea-ink-soft)] sm:text-base">
          覆盖 Telegram 搜索机器人、推广资源、机场节点推荐、USDT 交易与空投入口。
          你可以先用下方锚点快速跳转，再按分类挑工具。
        </p>

        <nav aria-label="站内导航" className="mt-6 flex flex-wrap gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--sea-ink)] no-underline sm:text-sm"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="island-shell rounded-2xl p-4 sm:p-6"
          >
            <h2 className="text-xl font-bold sm:text-2xl">{section.title}</h2>
            {section.subtitle ? (
              <p className="mt-2 text-sm text-[var(--sea-ink-soft)]">{section.subtitle}</p>
            ) : null}

            <div className="mt-4 overflow-x-auto rounded-2xl border border-[var(--line)]">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-[var(--chip-bg)]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">名字</th>
                    <th className="px-4 py-3 font-semibold">链接</th>
                    <th className="px-4 py-3 font-semibold">功能描述</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, idx) => (
                    <tr
                      key={`${section.id}-${item.name}-${idx}`}
                      className="border-t border-[var(--line)] align-top"
                    >
                      <td className="px-4 py-3 font-medium whitespace-nowrap">{item.name}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {item.links.map((link) => (
                            <a
                              key={`${item.name}-${link.url}`}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-2.5 py-1 text-xs font-semibold no-underline"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-[var(--sea-ink-soft)]">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
