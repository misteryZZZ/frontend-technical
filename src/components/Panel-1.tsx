// Panel1.tsx
"use client"

import { useState } from 'react';

const Panel1: React.FC = () => {
  const [text, setText] = useState('');
  const [words, setWords] = useState<string[]>([]);

  const handleButtonClick = () => {
    const wordArray = text.split(' ');
    const uniqueWords = Array.from(new Set(wordArray));
    setWords(uniqueWords);
  };

  return (
    <div className="flex flex-col md:flex-row py-8 max-[800px]:4">
      <div className="w-full md:w-1/2 p-4">
        <textarea
          className="border border-gray-300 p-2 w-full max-[800px]:min-h-[150px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Masukkan teks Bahasa Indonesia resmi di sini..."
        ></textarea>
        <button className="mt-4 px-4 py-2 max-[800px]:mt-2 bg-blue-500 text-white rounded w-full" onClick={handleButtonClick}>
          Proses Kata
        </button>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="overflow-x-auto rounded-lg">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Kata</th>
                <th className="px-4 py-2">Jumlah Kata</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {words.map((word, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 text-center' : 'bg-white text-center'}>
                  <td className="px-4 py-2">{word}</td>
                  <td className="px-4 py-2">{text.split(word).length - 1}</td>
                  <td className="px-4 py-2">
                    <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => setWords(words.filter((w) => w !== word))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Panel1;