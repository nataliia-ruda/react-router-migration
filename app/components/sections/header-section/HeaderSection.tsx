import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import cn from "classnames";

import { Container, Section } from "../../layout";
import { cardsData } from "./data";
import jetbrainsLogo from "../../../assets/jetbrains-logo.svg"

import styles from "./HeaderSection.module.scss";

export default function HeaderSection() {
  const textCn = useTextStyles();

  return (
    <Section className={styles.headerSection}>
      <Container>
        <h1 className={textCn("rs-hero")}>
          A modern programming language that makes developers happier
        </h1>

        <div className={styles.actions}>
          <div>
            <Button size="l" href="#" className={styles.getStartedBtn}>
              Get started
            </Button>
            <Button
              mode="outline"
              size="l"
              href="#"
              className={styles.whyBtn}
            >
              Why Kotlin
            </Button>
          </div>

          <div className={styles.contributors}>
            <img src={jetbrainsLogo} alt="JetBrains logo" />
            <p className={textCn("rs-text-2")}>
              Developed by{" "}
              <a
                className={textCn("rs-link", { mode: "rock" })}
                href="https://www.jetbrains.com/"
              >
                JetBrains
              </a>{" "}
              &amp; Open-source{" "}
              <a
                className={textCn("rs-link", { mode: "rock" })}
                href="https://github.com/JetBrains/kotlin/graphs/contributors"
              >
                Contributors
              </a>
            </p>
          </div>
        </div>

        <div className={cn("kto-grid kto-grid-gap-16 kto-offset-top-48", styles.grid)}>
          {cardsData.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className={cn(
                cardCn({
                  theme: "dark",
                  mode: "classic",
                  isClickable: true,
                }),
                "kto-col-3 kto-col-md-6 kto-col-sm-12"
              )}
            >
              <img src={card.img} alt="" />
              <h2 className={cn(textCn("rs-h3"), "kto-offset-top-16")}>
                {card.title}
              </h2>
              <p className={cn(textCn("rs-text-2"), "kto-offset-top-16")}>
                {card.subTitle}
              </p>
            </a>
          ))}
        </div>

        <p className={cn(textCn("rs-text-2"), "kto-offset-top-16")}>
          <a
            className={textCn("rs-link", { mode: "rock" })}
            href="/docs/multiplatform.html"
          >
            Multiplatform for Other Platforms
          </a>
          {", "}
          <a
            className={textCn("rs-link", { mode: "rock" })}
            href="/docs/data-science-overview.html"
          >
            Data Science
          </a>
        </p>
      </Container>
    </Section>
  );
}