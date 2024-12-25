import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import { Card, CardContent } from "./ui/Card";

const languages = ["JavaScript", "Python", "React", "Scikit-Learn", "TensorFlow", "Flutter"];

export default function ProfileCard() {
  return (
    <Card className="w-full my-20 overflow-hidden">
      <CardContent className="flex items-center space-x-10 p-6">
        {/* Avatar Section */}
        <Avatar className="w-80 h-80 rounded-lg">
          <AvatarImage src="/_DMT7580.jpg" alt="Profile picture" className="object-cover object-center w-full h-full"/>
          {/* <AvatarFallback>JD</AvatarFallback> */}
        </Avatar>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">Renu Rao</h2>
          <p className="text-muted-foreground mb-4">Software Developer | Machine Learning Enthusiast</p>
          <div className="flex justify-start space-x-4 mb-4 mt-10">
            <a href="https://github.com/renurao1306" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/-renu-rao" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:renurao.1306@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaEnvelope className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="px-3 py-1">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
