import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MainContent = () => {
  return (
    <main className="flex-grow p-4">
      <section className="mb-8">
        <Card className="bg-[#FFF1E5]">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-2">Featured Article Title</h2>
            <p className="text-lg mb-4">Brief description of the featured article goes here...</p>
            <img src="/placeholder.svg" alt="Featured Article" className="w-full h-64 object-cover rounded-lg" />
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Top Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <img src="/placeholder.svg" alt={`Story ${i}`} className="w-full h-40 object-cover rounded-lg mb-2" />
                <h4 className="text-lg font-semibold mb-2">Top Story {i} Headline</h4>
                <p className="text-sm">Brief description of the story...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Market Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["S&P 500", "Dow Jones", "NASDAQ"].map((index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{index}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">00,000.00</p>
                <p className="text-green-600">+0.00%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Latest News</h3>
        <ul className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="border-b pb-2">
              <h4 className="text-lg font-semibold">Latest News Headline {i}</h4>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default MainContent;