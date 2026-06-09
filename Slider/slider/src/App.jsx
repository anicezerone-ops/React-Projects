import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function App() {
  const SlickSlider = Slider?.default ?? Slider;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-slate-100">
    //   <h1 className="text-5xl font-bold text-blue-600">
    //     Tailwind Working 🚀
    //   </h1>
    // </div>
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <SlickSlider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "John Smith",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Excellent CCTV installation service. The team was professional and completed the setup on time.",
  },
  {
    name: "Sarah Johnson",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Very satisfied with the camera quality and mobile monitoring features.",
  },
  {
    name: "Michael Brown",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "Great customer support and reliable security solutions.",
  },
  {
    name: "Emily Davis",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    review: "The biometric attendance system works perfectly for our office.",
  },
  {
    name: "David Wilson",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    review: "Affordable pricing and excellent installation service.",
  },
  {
    name: "Jessica Taylor",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    review: "Highly recommend Decomax for home security solutions.",
  },
  {
    name: "Robert Anderson",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    review: "Professional team and high-quality CCTV cameras.",
  },
  {
    name: "Jennifer Thomas",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    review: "The remote monitoring feature gives us peace of mind.",
  },
  {
    name: "William Martin",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    review: "Quick installation and excellent after-sales support.",
  },
  {
    name: "Olivia White",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    review: "Reliable products and outstanding customer service.",
  },
];

export default App;
