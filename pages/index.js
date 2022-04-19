import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Button, Spacer, Text, Card, Grid } from "@nextui-org/react";

// Use `next-themes` to change the theme
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

// Import framer motion
import { motion } from "framer-motion";

//Import meteor script
import meteor from "../components/meteor";

if (typeof window === "object") {
  // Check if document is finally loaded
  document.addEventListener("DOMContentLoaded", function () {
    meteor();
  });
}

// Meta tag generation courtesy of: https://metatags.io/

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: [1.5, 1, 1.5, 1] }}
      transition={{ ease: [0.42, 0, 0, 1.08], duration: 3 }}
    >
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(https://copilot.github.com/universe_generative_pattern.png)`,
        }}
      >
        <Head>
          <title>AudioVisui - We're coming soon</title>
          <meta name="title" content="AudioVisui - We're coming soon" />
          <meta name="description" content="Make a living from your music." />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://audiovisui.com/" />
          <meta property="og:title" content="AudioVisui - We're coming soon" />
          <meta
            property="og:description"
            content="Make a living from your music."
          />
          <meta
            property="og:image"
            content="https://media.discordapp.net/attachments/821847610473709599/965989802216419378/AudioVisui_NoEffects_Compressed.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://audiovisui.com/" />
          <meta
            property="twitter:title"
            content="AudioVisui - We're coming soon"
          />
          <meta
            property="twitter:description"
            content="Make a living from your music."
          />
          <meta
            property="twitter:image"
            content="https://media.discordapp.net/attachments/821847610473709599/965989802216419378/AudioVisui_NoEffects_Compressed.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          as="main"
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Spacer />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2 }}
          >
            <Image
              src="/logo.png"
              alt="AudioVisui Logo"
              width={899}
              height={200}
            />
          </motion.div>
          <Spacer />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 1.5, delay: 1 }}
          >
            <Text h1 className={styles.title}>
              Make a living from your music.
            </Text>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 1, delay: 1.5 }}
          >
            <Text h2>Finally, a streaming service which respects artsits.</Text>
          </motion.div>
          <Spacer />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 1, delay: 1.8 }}
          >
            <Text h3>AudioVisui is launching in the near future.</Text>
          </motion.div>
          <Spacer />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 2 }}
          >
            <Button disabled shadow color="gradient" size="xl">
              Secure your spot as an Artist (soon™️)
            </Button>
          </motion.div>
          &nbsp;
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 2.5 }}
          >
            <Button color="gradient" size="lg">
              <a
                className={styles.button}
                href="https://discord.gg/36twPWjQhN"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the hype at our Discord Server.
              </a>
            </Button>
          </motion.div>
          <Spacer />
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 3 }}
          >
            <Card bordered shadow={false} css={{ mw: "90px" }}>
              <Grid.Container gap={1} justify="center">
                <Switch
                  color="primary"
                  checked={isDark}
                  onChange={(e) =>
                    setTheme(e.target.checked ? "dark" : "light")
                  }
                />
              </Grid.Container>
            </Card>
          </motion.div> */}
        </Container>
      </div>
    </motion.div>
  );
}
