import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/exams/videos', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setVideos(res.data);
        if (res.data.length > 0) setActiveVideo(res.data[0]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching videos");
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading Library...</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Video Section */}
      <div className="flex-1">
        {activeVideo ? (
          <div className="space-y-6">
            <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                title="Video Player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {activeVideo.category}
              </span>
              <h1 className="text-3xl font-black text-gray-900 mt-4">{activeVideo.title}</h1>
              <p className="text-gray-500 mt-2 text-lg">{activeVideo.description}</p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-200 aspect-video rounded-3xl flex items-center justify-center">
            No Videos Available
          </div>
        )}
      </div>

      {/* Playlist Sidebar */}
      <div className="w-full lg:w-96 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 px-2 flex items-center">
          <span className="mr-2">📺</span> Up Next
        </h3>
        <div className="overflow-y-auto max-h-[70vh] pr-2 space-y-3 custom-scrollbar">
          {videos.map((video) => (
            <div 
              key={video._id}
              onClick={() => setActiveVideo(video)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer group flex gap-4 ${
                activeVideo?._id === video._id ? 'border-blue-600 bg-blue-50' : 'border-transparent bg-white hover:border-blue-100'
              }`}
            >
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden relative">
                <img src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} alt="thumb" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600">{video.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase">{video.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;