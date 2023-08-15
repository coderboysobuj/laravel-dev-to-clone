import { InertiaLinkProps, Link } from "@inertiajs/react";

export function Tag({ children, ...props }: InertiaLinkProps) {
    return (
        <Link {...props} className="text-muted-foreground p-1 rounded-md border border-transparent  hover:border-secondary">
            {children}
        </Link>
    )
}
