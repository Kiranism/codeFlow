const Banner = () => {
  // const [state, handleSubmit] = useForm('mjvqrzpz')
  // const [theme, setTheme] = useTheme()
  return (
    <section className=" relative mt-40 flex flex-col items-center justify-between gap-10 bg-gradient-to-br from-primary/20 via-transparent to-primary/20">
      <div className="h-[1px] w-full bg-gradient-to-r from-primary to-transparent"></div>
      <div className="relative w-full max-w-7xl px-5">
        <div className="flex justify-between">
          <div className="mx-auto flex max-w-2xl flex-col gap-6 lg:mx-0">
            <div>
              <h1 className="mt-4 scroll-m-20  text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl">
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Empower{" "}
                </span>
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  and{" "}
                </span>
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  boost{" "}
                </span>
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  your{" "}
                </span>
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  business&apos;s{" "}
                </span>
                <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  productivity
                </span>
              </h1>
            </div>
            <p className="text-center text-lg text-muted-foreground lg:text-left">
              Unlock the potential of your business with CodeFlow. Experience
              simplified operations.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-l from-primary to-transparent"></div>
    </section>
  );
};

export default Banner;
