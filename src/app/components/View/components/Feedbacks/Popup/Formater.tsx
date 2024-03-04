export function Formatter({ content }: { content?: string }) {
    return (
        <>
            {content?.split('\n').map((paragraph, index) => (
                <p
                    key={index}
                    className="font-regular text-[.9375rem] md:text-[1.0625rem] text-brand__gray-600 leading-snug"
                >
                    {paragraph}
                </p>
            ))}
        </>
    )
}
