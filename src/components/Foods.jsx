/* eslint-disable react/prop-types */
const Foods = (props) => {
  const { data } = props;

  return (
    <div className="mt-10 flex max-w-[1300px] flex-wrap justify-center gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="max-w-[400px] rounded-md bg-[#F5F5F5] duration-200 hover:scale-95"
        >
          <img
            src={item.image}
            alt={item.name}
            width={360}
            height={240}
            className="block h-[240px] w-full rounded-t-md object-cover"
          />
          <div className="p-5">
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="rounded-md bg-orange-400 px-3 text-white">
                ${item.price}
              </p>
            </div>
            <p className="mt-4 leading-loose text-gray-500">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Foods;
