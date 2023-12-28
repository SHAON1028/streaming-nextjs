import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import cn from "@/app/lib/cn";

export default function Breadcrumbs({ breadcrumbs }) {
  console.log(breadcrumbs.length)
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={cn(lusitana.className, "flex text-xl md:text-2xl")}>
        {breadcrumbs.map((breadcrumb, index) => (
          
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={cn(
              breadcrumb.active ? "text-gray-900" : "text-gray-500"
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label} </Link>
            {/* <Link href={breadcrumb.href}>{breadcrumb.label} {index}{breadcrumbs.length-1}</Link> */}
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
