const About = () => {
  return (
    <div className=" h-[31em] mx-2 bg-orange-400 mt-4 rounded-lg">
      <div className=" text-white font-bold px-6 pt-10 ">
        At Foodie Central, we’re dedicated to bringing you the finest food
        delivery experience. Whether you’re craving a quick bite or a gourmet
        meal, we make it easy to satisfy your taste buds with just a few taps.
        Our goal is to connect you with your favorite restaurants and deliver
        delicious food right to your doorstep, swiftly and conveniently.
      </div>
      <div className="p-8">
        <div className="font-extrabold pb-4 text-black ">
          Why Choose Us?
        </div>
        <div className="font-bold text-white">
          <div className="list-item">
            Wide Selection: Explore a diverse range of restaurants and cuisines,
            from local favorites to international delights.
          </div>
          <div className="list-item">
            Fast Delivery: Our efficient delivery network ensures your food
            arrives hot and fresh, right on time.
          </div>
          <div  className="list-item">
            User-Friendly Experience: Our intuitive app design makes ordering
            your favorite meals easier than ever.
          </div>
          <div  className="list-item">
            Real-Time Tracking: Stay updated on your order’s progress with live
            tracking.
          </div>
        </div>
      </div>
      <div className="pt-36 text-center font-bold">
        Developed with ❤️ by Ahan
      </div>
    </div>
  );
};
export default About;
