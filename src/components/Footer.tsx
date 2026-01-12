export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Dhruv Bhatt. All rights reserved.</p>
        <p className="hidden sm:block">
          Built with Next.js & Tailwind · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
