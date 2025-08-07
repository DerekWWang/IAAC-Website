import Image from "next/image";
import Link from "next/link";

export default function Subteams() {
    return (
        <div className="min-h-screen bg-black">
        <div className="flex h-screen">
          {/* Left Section - Rocket */}
          <div className="flex-1 relative group cursor-pointer overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <img
              src="/images/rocket_image.jpg"
              alt="Rocket"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/60 group-hover:via-black/30 group-hover:to-transparent transition-all duration-300 z-10"></div>
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Rocketry</h3>
              <p className="text-gray-200 text-sm">Explore our rocketry projects and innovations</p>
            </div>
            <Link href="/subteams#rocketry" className="absolute inset-0 z-30"></Link>
          </div>

          {/* Middle Section - Filler Text */}
          <div className="flex-1 bg-gray-900 flex items-center justify-center p-12">
            <div className="text-center max-w-md">
              <h2 className="text-3xl font-bold text-white mb-6">Advancing Aerospace Technology</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At the University of Washington's Institute for Advanced Aeronautical Concepts, 
                we push the boundaries of aerospace engineering through innovative research, 
                hands-on projects, and cutting-edge technology development.
              </p>
              <p className="text-gray-400 text-sm">
                Our multidisciplinary team of students and faculty work together to solve 
                complex challenges in rocketry, drone technology, and aeronautical systems.
              </p>
            </div>
          </div>

          {/* Right Section - Drone */}
          <div className="flex-1 relative group cursor-pointer overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <img
              src="/images/drone_image.jpeg"
              alt="Drone"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/60 group-hover:via-black/30 group-hover:to-transparent transition-all duration-300 z-10"></div>
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Drones & UAVs</h3>
              <p className="text-gray-200 text-sm">Discover our autonomous systems and aerial robotics</p>
            </div>
            <Link href="/subteams#drones" className="absolute inset-0 z-30"></Link>
          </div>
        </div>
      </div>
    )
}