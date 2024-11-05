import Link from 'next/link'
function LastSection() {
  return (
    <div className="flex justify-center items-center min-h-screen max-h-full bg-last-image lg:h-screen">
        <div className="flex flex-col items-center gap-16">
            <h2 className="text-4xl font-extrabold text-center text-white">Give yourself the opportunity to <br/> become a pro player</h2>
            <div>
                <Link href="#" className="text-white font-semibold px-4 py-3 bg-green-600">Book a session</Link>
            </div>
        </div>
    </div>
  )
}

export default LastSection
