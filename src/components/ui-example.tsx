"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function UIExample() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-6 md:space-y-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
          shadcn/ui Components Demo
        </h1>
        <p className="text-sm md:text-base text-muted-foreground px-4">
          Showcasing components with your custom color palette
        </p>
      </div>

      <div className="flex justify-center mb-6 md:mb-8">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="border-cape-cod bg-pure-white">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl text-cape-cod">Legal Consultation</CardTitle>
            <CardDescription className="text-xs md:text-sm text-obsidian">
              Professional legal advice for your business needs
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm md:text-base text-cape-cod mb-3 md:mb-4">
              Get expert legal guidance tailored to your specific requirements.
            </p>
            <Button className="w-full md:w-auto bg-pure-mint text-cape-cod hover:bg-obsidian hover:text-pure-white text-sm">
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card className="border-cape-cod bg-pure-white">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl text-cape-cod">Contract Review</CardTitle>
            <CardDescription className="text-xs md:text-sm text-obsidian">
              Comprehensive contract analysis and optimization
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm md:text-base text-cape-cod mb-3 md:mb-4">
              Ensure your contracts protect your interests and comply with regulations.
            </p>
            <Button variant="outline" className="w-full md:w-auto border-cape-cod text-cape-cod hover:bg-cape-cod hover:text-pure-white text-sm">
              Get Started
            </Button>
          </CardContent>
        </Card>

        <Card className="border-cape-cod bg-pure-white md:col-span-2 lg:col-span-1">
          <CardHeader className="pb-3 md:pb-6">
            <CardTitle className="text-lg md:text-xl text-cape-cod">Compliance Support</CardTitle>
            <CardDescription className="text-xs md:text-sm text-obsidian">
              Stay compliant with changing regulations
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm md:text-base text-cape-cod mb-3 md:mb-4">
              Navigate complex regulatory requirements with confidence.
            </p>
            <Button variant="secondary" className="w-full md:w-auto bg-obsidian text-pure-white hover:bg-cape-cod text-sm">
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
          Your Custom Color Palette
        </h2>
        <div className="flex justify-center gap-3 md:gap-4 flex-wrap px-4">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-pure-mint rounded-lg flex items-center justify-center text-cape-cod font-bold text-xs md:text-sm">
            Pure Mint
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-cape-cod rounded-lg flex items-center justify-center text-pure-white font-bold text-xs md:text-sm">
            Cape Cod
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-obsidian rounded-lg flex items-center justify-center text-pure-white font-bold text-xs md:text-sm">
            Obsidian
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-pure-white border-2 border-cape-cod rounded-lg flex items-center justify-center text-cape-cod font-bold text-xs md:text-sm">
            Pure White
          </div>
        </div>
      </div>
    </div>
  );
} 