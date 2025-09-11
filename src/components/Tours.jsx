import { useState } from "react";
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  // 使用 state 保存 tours 数据
  const [toursData, setToursData] = useState(tours);

  // 删除 tour 的函数
  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              removeTour={() => removeTour(tour.id)}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
