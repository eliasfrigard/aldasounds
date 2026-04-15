import AnimateIn from './AnimateIn'
import quotesData from '../quotes.json'

export default function Quotes() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12 py-8">
        {quotesData.map((quote) => (
          <AnimateIn
            key={quote.id}
            className="md:w-[45%] text-center"
          >
            <blockquote className="font-cursive text-lg md:text-xl leading-[200%] tracking-wide italic">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm tracking-wide">
              &mdash; {quote.author}, {quote.author_title} ({quote.country})
            </p>
            {quote.link && (
              <a
                href={`https://${quote.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary/60 hover:text-accent transition-colors"
              >
                {quote.link}
              </a>
            )}
          </AnimateIn>
        ))}
      </div>
    </div>
  )
}
