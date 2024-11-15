import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SpeedCamOverlay = () => {
  
  const data = [
    {
      id: 330,
      speed: "0.0 KMPH",
      speedLimit: "10.0 KMPH",
      distance: "0.0 M",
      direction: "-",
      dateTime: "10/11/2024 1:03:50 PM",
      location: { lat: "26°46'36\"N", long: "83°23'30\"E" },
      plateNumber: "-",
      imageUrl: "/public/images/ss1.jpg" // Increased image size
    },
    {
      id: 331,
      speed: "0.0 KMPH",
      speedLimit: "10.0 KMPH",
      distance: "0.0 M",
      direction: "-",
      dateTime: "10/11/2024 1:03:50 PM",
      location: { lat: "26°46'36\"N", long: "83°23'30\"E" },
      plateNumber: "-",
      imageUrl: "/public/images/ss2.jpg" // Increased image size
    },
    {
      id: 332,
      speed: "0.0 KMPH",
      speedLimit: "10.0 KMPH",
      distance: "0.0 M",
      direction: "-",
      dateTime: "10/11/2024 1:03:50 PM",
      location: { lat: "26°46'36\"N", long: "83°23'30\"E" },
      plateNumber: "-",
      imageUrl: "/public/images/ss3.jpg" // Increased image size
    },
    {
      id: 333,
      speed: "0.0 KMPH",
      speedLimit: "10.0 KMPH",
      distance: "0.0 M",
      direction: "-",
      dateTime: "10/11/2024 1:03:50 PM",
      location: { lat: "26°46'36\"N", long: "83°23'30\"E" },
      plateNumber: "-",
      imageUrl: "/public/images/ss4.jpg" // Increased image size
    },
    {
      id: 334,
      speed: "0.0 KMPH",
      speedLimit: "10.0 KMPH",
      distance: "0.0 M",
      direction: "-",
      dateTime: "10/11/2024 1:03:50 PM",
      location: { lat: "26°46'36\"N", long: "83°23'30\"E" },
      plateNumber: "-",
      imageUrl: "/public/images/ss5.jpg" // Increased image size
    },
    {
      id: 335,
      speed: "0.0 KMPH",
      speedLimit: "10.0 KMPH",
      distance: "0.0 M",
      direction: "-",
      dateTime: "10/11/2024 1:03:50 PM",
      location: { lat: "26°46'36\"N", long: "83°23'30\"E" },
      plateNumber: "-",
      imageUrl: "/public/images/ss6.jpg" // Increased image size
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentRecord = data[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < data.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6"> {/* Increased max-width and padding */}
      <div className="relative">
        
        <img
          src={currentRecord.imageUrl}
          alt="Speed camera capture"
          className="w-full h-auto rounded-xl shadow-xl" /* Larger rounded corners and shadow */
        />

        
        <div className="absolute top-2 right-0 bg-transparent text-white p-0 rounded-lg text-base font-medium space-y-0.5"> {/* Increased size and spacing */}
          <div className="text-lg">ID - {currentRecord.id}</div> {/* Larger text */}
          <div>Lat - {currentRecord.location.lat}</div>
          <div>Long - {currentRecord.location.long}</div>
          <div>Speed Limit - {currentRecord.speedLimit}</div>
        </div>

        {/* Bottom section with detailed info */}
        <div className="mt-6 bg-white rounded-xl shadow-lg border"> {/* Increased margin and rounded corners */}
          <div className="p-6"> {/* Increased padding */}
            <div className="grid grid-cols-2 gap-8"> {/* Increased gap */}
              <div>
                <div className="flex justify-between mb-4"> {/* Increased margin */}
                  <button 
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="px-6 py-3 border-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 flex items-center gap-2 text-base font-medium"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Prev
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={currentIndex === data.length - 1}
                    className="px-6 py-3 border-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 flex items-center gap-2 text-base font-medium"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-base space-y-3"> {/* Increased text size and spacing */}
                  <p className="text-lg font-medium">Record Count: {currentIndex + 1}/{data.length}</p>
                  <p className="font-medium">ID: <span className="font-normal">{currentRecord.id}</span></p>
                  <p className="font-medium">Speed: <span className="font-normal">{currentRecord.speed}</span></p>
                  <p className="font-medium">Speed Limit: <span className="font-normal">{currentRecord.speedLimit}</span></p>
                  <p className="font-medium">Distance: <span className="font-normal">{currentRecord.distance}</span></p>
                  <p className="font-medium">Direction: <span className="font-normal">{currentRecord.direction}</span></p>
                  <p className="font-medium">Date Time: <span className="font-normal">{currentRecord.dateTime}</span></p>
                  <p className="font-medium">Lat/Long: <span className="font-normal">{currentRecord.location.lat}/{currentRecord.location.long}</span></p>
                  <p className="font-medium">Plate#: <span className="font-normal">{currentRecord.plateNumber}</span></p>
                </div>
              </div>
              <div className="space-y-3"> {/* Increased button spacing */}
                {[
                 `ID: ${currentRecord.id}`,
                  'Print',
                  'Video',
                  'Save As',
                  'Violations',
                  'Email',
                  'Sync',
                  'Crop',
                  'Do ANPR'
                ].map((action) => (
                  <button
                    key={action}
                    className="w-full px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedCamOverlay;