import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

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
      imageUrl: "/images/ss1.jpg" // Increased image size
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
      imageUrl: "/images/ss2.jpg" //
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
      imageUrl: "/images/ss3.jpg" // Increased image size
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
      imageUrl: "/images/ss4.jpg" // Increased image size
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
      imageUrl: "/images/ss5.jpg" // Increased image size
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
      imageUrl: "/images/ss6.jpg" // Increased image size
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCropping, setIsCropping] = useState(false);
  const [cropData, setCropData] = useState('');
  const [cropper, setCropper] = useState(null);

  const currentRecord = data[currentIndex];

  const handleCrop = () => {
    if (cropper) {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      setIsCropping(false);
    }
  };

  const handleSave = () => {
    const link = document.createElement('a');
    link.href = cropData || currentRecord.imageUrl;
    link.download = `record-${currentRecord.id}.jpg`;
    link.click();
  };

  const handleEmail = () => {
    const emailBody = `Record ID: ${currentRecord.id}\nImage URL: ${
      cropData || currentRecord.imageUrl
    }`;
    window.location.href = `mailto:example@example.com?subject=Record%20Details&body=${encodeURIComponent(
      emailBody
    )}`;
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
     const newIndex=  (prev > 0 ? prev - 1 : prev)
     setCropData('');
     return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev < data.length - 1 ? prev + 1 : prev)
    setCropData("")
      return newIndex
    });
  };

  const handleStaticButton = (action) => {
    console.log(`${action} button clicked`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="relative">
        {isCropping ? (
          <>
            <Cropper
              src={currentRecord.imageUrl}
              style={{ height: 400, width: '100%' }}
              initialAspectRatio={16 / 9}
              guides={false}
              cropBoxResizable={true}
              onInitialized={(instance) => setCropper(instance)}
            />
            <button
              onClick={handleCrop}
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg"
            >
              Crop & Save
            </button>
          </>
        ) : (
          <img
            src={cropData || currentRecord.imageUrl}
            alt="Speed camera capture"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        )}

        <div className="absolute top-2 right-0 bg-transparent text-white p-0 rounded-lg text-base font-medium space-y-0.5">
          <div className="text-lg">ID - {currentRecord.id}</div>
          <div>Lat - {currentRecord.location.lat}</div>
          <div>Long - {currentRecord.location.long}</div>
          <div>Speed Limit - {currentRecord.speedLimit}</div>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-lg border">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between mb-4">
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
                <div className="text-base space-y-3">
                  <p className="text-lg font-medium">
                    Record Count: {currentIndex + 1}/{data.length}
                  </p>
                  <p className="font-medium">
                    ID: <span className="font-normal">{currentRecord.id}</span>
                  </p>
                  <p className="font-medium">
                    Speed:{' '}
                    <span className="font-normal">{currentRecord.speed}</span>
                  </p>
                  <p className="font-medium">
                    Speed Limit:{' '}
                    <span className="font-normal">{currentRecord.speedLimit}</span>
                  </p>
                  <p className="font-medium">
                    Distance:{' '}
                    <span className="font-normal">{currentRecord.distance}</span>
                  </p>
                  <p className="font-medium">
                    Direction:{' '}
                    <span className="font-normal">{currentRecord.direction}</span>
                  </p>
                  <p className="font-medium">
                    Date Time:{' '}
                    <span className="font-normal">{currentRecord.dateTime}</span>
                  </p>
                  <p className="font-medium">
                    Lat/Long:{' '}
                    <span className="font-normal">
                      {currentRecord.location.lat}/{currentRecord.location.long}
                    </span>
                  </p>
                  <p className="font-medium">
                    Plate#: <span className="font-normal">{currentRecord.plateNumber}</span>
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => setIsCropping(true)}
                  className="w-full px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Crop
                </button>
                <button
                  onClick={() => window.print()}
                  className="w-full px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Print
                </button>
                <button
                  onClick={handleSave}
                  className="w-full px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Save As
                </button>
                <button
                  onClick={handleEmail}
                  className="w-full px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Email
                </button>
                <button
                  onClick={() => handleStaticButton('Video')}
                  className="w-full px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Video
                </button>
                <button
                  onClick={() => handleStaticButton('ANPR')}
                  className="w-full px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  ANPR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedCamOverlay;
