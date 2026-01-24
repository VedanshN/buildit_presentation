import { LeanCanvasSection } from "@/components/lean-canvas-section"
import { SideNav } from "@/components/side-nav"

export default function LeanCanvasPage() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="relative z-10">
        <LeanCanvasSection />
      </div>
    </main>
  )
}
