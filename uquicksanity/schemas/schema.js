import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import latestposts from "./latestposts";
import jobposts from "./jobposts";
import NavPage from "./navPage";
import blockContent from "./blockContent";
import sellposts from "./sellposts";
import upcomingevents from "./upcomingevents";
import resources from "./resources";
import footerPage from "./footerPage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    latestposts,
    NavPage,
    jobposts,
    blockContent,
    sellposts,
    footerPage,
    resources,
    upcomingevents,
  ]),
});
