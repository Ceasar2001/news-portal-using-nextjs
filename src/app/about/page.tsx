import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import avatartImg from "@/assets/banner.jpg"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-gray-700 text-lg max-w-2xl text-center mb-10">
        We are committed to delivering the best service and providing our customers with exceptional experiences. Learn more about our mission, vision, and the amazing team behind our success.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {/* Card 1 */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our mission is to empower people through technology and innovation, making a positive impact in the world.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We envision a future where our solutions simplify lives and businesses thrive globally with the help of our services.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Meet the Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our dedicated team is passionate about what we do and strives to deliver the best results to our clients every day.
            </p>
          </CardContent>
        </Card>

        {/* Card 1 - Developer 1 */}
        <Card className="shadow-lg">
          <CardHeader className="flex items-center space-x-4">
            <Avatar src={AvatarImage} alt="Developer 1 Avatar" className="h-12 w-12 rounded-full" />
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Lead Frontend Developer</p>
            <p className="mt-2 text-gray-500 text-sm">
              John is responsible for crafting beautiful user experiences and leads the frontend team with his expertise in React and modern UI design.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
