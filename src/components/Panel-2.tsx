// Panel2.tsx
import { useState } from 'react';

const Panel2: React.FC = () => {
  const [numBoxes, setNumBoxes] = useState<number>(0);
  const [boxes, setBoxes] = useState<number[]>([]);

  const handleNumBoxesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      setNumBoxes(value);
    }
  };

  const handleButtonClick = () => {
    const newBoxes = Array.from(Array(numBoxes).keys());
    setBoxes(newBoxes);
  };

  return (
    <div className="flex flex-col py-8 px-4">
      <input
        type="number"
        className="border border-gray-300 p-2 max-[800px]:mt-4 md:mr-2 md:mb-0 max-[800px]:w-full"
        value={numBoxes}
        onChange={handleNumBoxesChange}
        placeholder="Jumlah Kotak (max 1000)"
        max={1000}
      />
      <button className="mt-2 px-4 w-full py-2 bg-blue-500 text-white rounded mb-4 md:mb-0 md:mr-4 max-[800px]:w-full" onClick={handleButtonClick}>
        Tampilkan Kotak
      </button>
      <div className="flex flex-wrap mt-4">
        {Array.from(Array(numBoxes).keys()).map((index) => (
          <div
            key={index}
            className="w-16 h-16 bg-gray-300 m-2 flex justify-center items-center"
          >
            {/* Menampilkan nomor kotak */}
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panel2;
