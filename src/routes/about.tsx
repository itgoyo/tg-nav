import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-10">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">关于本站</p>
        <h1 className="display-title mb-4 text-3xl font-bold sm:text-5xl">
          Telegram 中文导航聚合页
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          这个站点用来整理常见 Telegram 资源入口，覆盖搜索机器人、推广工具、机场节点与交易所链接。
          页面采用结构化数据维护，方便持续扩展与 SEO 收录。
        </p>
      </section>
    </main>
  )
}
