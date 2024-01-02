import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import CodeCanvasFontSizeTool from "../CodeCanvasTools/CodeCanvasFontSizeTool";
import CodeCanvasFontTool from "../CodeCanvasTools/CodeCanvasFontTool";
import CodeCanvasWallpaperTool from "../CodeCanvasTools/CodeCanvasWallpaperTool";
import RemotioPlayer from "../RemotioPlayer";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { TypeWriteEfx } from "./TypeWriteEfx";

const Hero = () => {
  const words = [
    {
      text: "CodeFlow.",
    },
  ];

  return (
    <div className=" my-10 flex flex-col md:flex-row mx-auto justify-center items-center gap-5  container">
      <main className=" flex-1 w-full md:w-1/2  gap-4 flex-col  lg:my-0">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-full border float-right md:float-none mb-4  border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25"
        >
          <span className="brightness-[1.7]">Under Development</span>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "scroll-m-20 mb-4 font-mono text-4xl font-extrabold tracking-tight lg:text-5xl"
          )}
        >
          <div
            className={cn(
              "relative bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl"
            )}
          >
            <TypeWriteEfx
              words={words}
              className="relative bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent  text-left lg:text-8xl"
              cursorClassName="bg-primary lg:h-16 "
            />
          </div>
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text font-mono text-transparent">
            Animate
          </span>{" "}
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent font-mono">
            Your{" "}
          </span>
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent font-mono">
            Code{" "}
          </span>
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent font-mono">
            Snippet{" "}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-base text-muted-foreground lg:text-lg font-mono"
        >
          Welcome to <span className="text-primary">CodeFlow</span>, create
          effortlessly beautiful code animations in seconds and share them in
          your socials..{" "}
        </motion.p>
        <Link
          href={"/dashboard"}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "mt-3"
          )}
        >
          Try Now
        </Link>
      </main>
      <div className="flex-1 w-full md:w-1/2">
        <Card>
          {/* <CardHeader></CardHeader> */}
          <CardContent className="p-0 md:p-6">
            <RemotioPlayer
              autoPlay
              controls={false}
              mode="landing"
              title={[
                {
                  code: `
  function generateMessage(name, age) {
                    return Hello, name! You are age years old.;
                  }
                  
                  // Example usage
                  const message = generateMessage("John", 25);
                  console.log(message);
                  
                  `,
                  id: "1",
                  language: "js",
                  editable: false,
                },
                {
                  code: `function App() {
                    // create an array of objects
                    const users = [
                      {id: 1, name: 'John', status: 'active'},
                      {id: 2, name: 'Rusk', status: 'inactive'},
                      {id: 3, name: 'Erlic', status: 'active'},
                      {id: 4, name: 'Sara', status: 'active'},
                      {id: 5, name: 'Kat', status: 'inactive'}
                    ]
                  
                    // filter array based on active status
                    const filterd_users = users.filter( user => user.status === 'active' );
                  
                    return (
                      <div>
                        <h3>Active Users</h3>
                        <ul>
                          {filterd_users.map(user =>
                            <li key={user.id}>{user.name}</li>
                          )}
                        </ul>
                      </div>
                    );
                  }`,
                  id: "1",
                  language: "js",
                  editable: false,
                },
              ]}
            />
          </CardContent>
          <CardFooter className="p-2 md:px-6">
            <div className="flex flex-col gap-2 md:flex-row">
              <CodeCanvasFontTool />
              <CodeCanvasWallpaperTool /> <CodeCanvasFontSizeTool />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
