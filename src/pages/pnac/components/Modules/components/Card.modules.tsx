import { VariantProps, tv } from 'tailwind-variants'

const card = tv({
    base: 'rounded-lg flex flex-col justify-between gap-20 p-4 md:p-5',
    variants: {
        fill: {
            outlined: 'border-[.125rem] border-brand__gray-200',
            filled: 'bg-brand__gray-200',
        },
    },
    defaultVariants: {
        fill: 'filled',
    },
})

interface CardProps extends VariantProps<typeof card> {
    title: string
    module: string
    features: string[]
}

export function Card({ features, title, module, fill }: CardProps) {
    return (
        <div className={card({ fill: fill })}>
            <div className="flex items-center justify-between">
                <h3 className="uppercase text-[1.3125rem] text-brand__gray-1000">
                    {title}
                </h3>
                <span className="uppercase text-[.8125rem] text-brand__gray-600">
                    {module}
                </span>
            </div>
            <div className="flex flex-col items-start gap-2">
                {features.map((feature, index) => (
                    <div
                        className="text-[.8125rem] rounded bg-brand__gray-300 px-[.4375rem] py-[.3125rem]"
                        key={index}
                    >
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    )
}
