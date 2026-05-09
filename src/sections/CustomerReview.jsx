import avatar1 from "../assets/plant1.webp";
import avatar2 from "../assets/plant2.png";
import avatar3 from "../assets/plant3.png";

const reviews = [
  {
    id: 1,
    name: "Shelly Russel",
    stars: 5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Lula Rolfson",
    stars: 5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Carol Huels",
    stars: 5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment — my plant collection has never looked better!",
    avatar: avatar3,
  },
];

function CustomerReview() {
  return (
    <section className="px-6 md:px-10 py-16 max-w-7xl mx-auto">
      <div className="flex justify-center mb-10">
        <h2 className="relative text-2xl font-semibold px-6 py-2">
          <span className="absolute left-0 top-0 w-4 h-4 border-l-2 border-t-2 border-green-400 rounded-tl-md" />
          Customer Review
          <span className="absolute right-0 bottom-0 w-4 h-4 border-r-2 border-b-2 border-green-400 rounded-br-md" />
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white/5 border border-white/10 rounded-3xl p-5 space-y-3 hover:border-green-500/30 transition"
          >
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-sm font-semibold">{review.name}</p>
                <p className="text-yellow-400 text-xs">
                  {"★".repeat(review.stars)}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-5">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReview;
