import React from "react";
import Link from "@docusaurus/Link";
import styles from "./ecosystem.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Ecosystem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ecosystem_section}>
        <div className={styles.ecosystem_section_content}>
          <div className={styles.ecosystem_section_upper_content}>
            <div className={styles.ecosystem_section_heading}>
              A single control plane for<br/>your entire data ecosystem.
            </div>
            <div className={styles.ecosystem_section_subtitle}>
              DataHub is built on an extensible, scalable and secure foundation.
              <br/>It's hardened and ready for the toughest challenges large enterprises face.
            </div>
            <Link className={styles.bottom_line_cta}>
              See how Netflix uses DataHub at scale&nbsp;→
            </Link>
          </div>
          <div className={styles.ecosystem_section_lower_content}>
            <div className={styles.itemWrappers}>
              <div className={styles.itemWrappersRow}>
                <div className={styles.item1}>
                  <div className={styles.item_content}>
                    <img
                      width="20"
                      height="20"
                      src={useBaseUrl("/img/cloud.svg")}
                      alt="right--v1"
                    />
                    <span className="">
                      An architecture that's designed for true enterprise scale{" "}
                    </span>
                  </div>
                </div>
                <div className={styles.item2}>
                  <div className={styles.item_content}>
                    <img
                      width="20"
                      height="20"
                      src={useBaseUrl("/img/git-pull.svg")}
                      alt="right--v1"
                    />
                    <span className="">
                      70+ native <br /> integrations, growing
                      <br /> every month.{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.itemWrappersRow}>
                <div className={styles.item3}>
                  <div className={styles.item_content}>
                    <img
                      width="20"
                      height="20"
                      src={useBaseUrl("/img/lock.svg")}
                      alt="right--v1"
                    />
                    <span className="">
                      Execute ingestion in-VPC,
                      <br /> so your actual data never leaves <br />
                      the network.
                    </span>
                  </div>
                </div>
                <div className={styles.item4}>
                  <div className={styles.item_content}>
                    <img
                      width="20"
                      height="20"
                      src={useBaseUrl("/img/lightning.svg")}
                      alt="right--v1"
                    />
                    <span className="">
                      Event-driven actions framework, rich APIs and SDKs.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.diagramItem}>
              <img
                src={useBaseUrl("/img/datahub-architechture-diagram.svg")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
