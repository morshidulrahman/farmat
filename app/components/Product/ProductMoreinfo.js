import React from "react";
import { Tabs } from "@mantine/core";
import { BiDetail, BiInfoCircle, BiStar } from "react-icons/bi";
import Description from "./Description";
import Additional from "./Additional";
import Review from "./Review";

const ProductMoreinfo = () => {
  return (
    <div className="py-12 bg-[#F5F5F5]">
      <div className="container">
        <Tabs color="yellow" orientation="vertical" defaultValue="Descrition">
          <Tabs.List>
            <Tabs.Tab value="Descrition" icon={<BiDetail size={14} />}>
              Description
            </Tabs.Tab>
            <Tabs.Tab value="Additional" icon={<BiInfoCircle size={14} />}>
              Additional Information
            </Tabs.Tab>
            <Tabs.Tab value="Review" icon={<BiStar size={14} />}>
              Description
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Descrition" pl="xs">
            <Description />
          </Tabs.Panel>

          <Tabs.Panel value="Additional" pl="xs">
            <Additional />
          </Tabs.Panel>

          <Tabs.Panel value="Review" pl="xs">
            <Review />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductMoreinfo;
