// components/CustomScrollArea.js
export default function CustomScrollArea() {
    return (
      <div className="h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-gradient-to-r scrollbar-thumb-purple-500 scrollbar-thumb-pink-500 scrollbar-track-gray-200">
        <div className="p-4 space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} className="text-gray-700">
              This is item {i + 1} inside a scrollable container.
            </p>
          ))}
        </div>
      </div>
    );
  }
  