import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Trending Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"].map((topic, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {topic}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Newsletter Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="email" placeholder="Your email address" />
            <Button className="w-full">Subscribe</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advertisement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-200 h-48 flex items-center justify-center">
            Ad Space
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;