export default function MatchingCard() {
  return (
    <div className="bg-black text-white p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-2">Specialization Matching</h3>

      <p className="text-gray-300 mb-4">AI-driven advisor assignment based on buyer portfolio.</p>

      <div className="bg-white/10 p-4 rounded-lg flex justify-between items-center">
        <div>
          <p className="font-semibold">Perfect Match Detected</p>
          <p className="text-sm text-gray-300">Matches your expertise.</p>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-lg">Review</button>
      </div>
    </div>
  )
}
