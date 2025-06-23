import React from "react";
import ReactDOM from "react-dom";
import ReactBootstrap from "react-bootstrap";
import Mousetrap from "mousetrap";
import { Link, Route, NavLink } from "react-router-dom";
import {
  Icon,
  IconDefinition,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";
import { ApolloClient } from "@apollo/client";

declare global {
  interface Window {
    PluginApi: IPluginApi;
  }
}

declare module "*.text" {
  export const query: string;
}

interface IPluginApi {
  Event: {
    addEventListener: (
      event: string,
      callback: (e: CustomEvent) => void,
    ) => void;
  };
  GQL: {
    useConfigurationQuery(): {
      data: { configuration: ConfigResult };
      loading: boolean;
    };
    useFindImagesQuery(args: { variables: QueryFindImagesArgs }): {
      data?: {
        findImages: Query["findImages"];
      };
      loading: boolean;
    };
    useFindPerformerQuery(args: { variables: QueryFindPerformerArgs }): {
      data: {
        findPerformer: Query["findPerformer"];
      };
      loading: boolean;
    };
    useFindPerformersQuery(args: { variables: QueryFindPerformersArgs }): {
      data?: {
        findPerformers: Query["findPerformers"];
      };
      loading: boolean;
    };
    useFindScenesQuery(args: { variables: QueryFindScenesArgs }): {
      data: { findScenes: Query["findScenes"] };
      loading: boolean;
    };
    useFindStudioQuery(args: { variables: QueryFindStudioArgs }): {
      data: { findStudio: Query["findStudio"] };
      loading: boolean;
    };
    useFindStudiosQuery(args: { variables: QueryFindStudiosArgs }): {
      data: { findStudios: Query["findStudios"] };
      loading: boolean;
    };
    useFindTagsQuery(args: { variables: QueryFindTagsArgs }): {
      data: { findTags: Query["findTags"] };
      loading: boolean;
    };
    useStatsQuery(): { data: { stats: StatsResultType } };
  };
  React: typeof React;
  ReactDOM: typeof ReactDOM;
  components: StashPluginComponents;
  hooks: any;
  libraries: {
    Apollo: typeof ApolloClient;
    Bootstrap: typeof ReactBootstrap;
    FontAwesomeRegular: any;
    FontAwesomeSolid: any;
    Intl: any;
    Mousetrap: typeof Mousetrap;
    MousetrapPause: any;
    ReactRouterDOM: {
      Link: typeof Link;
      Route: typeof Route;
      NavLink: typeof NavLink;
    };
  };
  loadableComponents: any;
  patch: PatchableComponents;
  register: {
    route: (path: string, component: React.FC<any>) => void;
  };
  utils: {
    NavUtils: any;
    loadComponents: (components: (() => Promise<React.FC<any>>)[]) => void;
  };
}

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

interface StashPluginComponents {
  BooleanSetting?: (props: IBooleanSetting) => React.JSX.Element;
  HoverPopover: (props: IHoverPopover) => React.JSX.Element;
  Icon: (props: IIcon) => Icon;
  "PerformerDetailsPanel.DetailGroup": (
    props: IPerformerDetailsPanelDetailGroup,
  ) => React.JSX.Element;
  PerformerCard: (props: IPerformerCardProps) => React.JSX.Element;
  "PerformerCard.Details": (props: IPerformerCardProps) => React.JSX.Element;
  "PerformerCard.Image": (props: IPerformerCardProps) => React.JSX.Element;
  "PerformerCard.Title": (props: IPerformerCardProps) => React.JSX.Element;
  SceneCard: (props: ISceneCardProps) => React.JSX.Element;
}

interface PatchableComponents {
  after: PatchableComponentsAfter;
  before: PatchableComponentsBefore;
  instead: PatchableComponentsInstead;
}

interface PatchableComponentsAfter {
  (
    component: "MainNavBar.UtilityItems",
    fn: (props: React.PropsWithChildren) => React.JSX.Element[],
  ): void;
  (
    component: "PerformerDetailsPanel.DetailGroup",
    fn: (props: IPerformerDetailsPanelDetailGroup) => React.JSX.Element[],
  ): void;
}

interface PatchableComponentsBefore {
  (
    component: "PerformerDetailsPanel.DetailGroup",
    fn: (props: IPerformerDetailsPanelDetailGroup) => React.JSX.Element[],
  ): void;
}

interface PatchableComponentsInstead {
  (
    component: "MainNavBar.UtilityItems",
    fn: (
      props: React.PropsWithChildren,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "PerformerCard",
    fn: (
      props: IPerformerCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "PerformerCard.Details",
    fn: (
      props: IPerformerCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "PerformerCard.Image",
    fn: (
      props: IPerformerCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "PerformerCard.Title",
    fn: (
      props: IPerformerCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "PerformerDetailsPanel.DetailGroup",
    fn: (
      props: IPerformerDetailsPanelDetailGroup,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "SceneCard",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "SceneCard.Details",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "SceneCard.Image",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "SceneCard.Overlays",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
  (
    component: "SceneCard.Popovers",
    fn: (
      props: ISceneCardProps,
      _: object,
      Original: React.JSX.Element,
    ) => React.JSX.Element[],
  ): void;
}

interface IPerformerDetailsPanelDetailGroup extends React.PropsWithChildren {
  collapsed: boolean;
  fullWidth: boolean;
  performer: Performer;
}

interface IHoverPopover extends React.PropsWithChildren {
  enterDelay?: number;
  leaveDelay?: number;
  content: React.JSX.Element[] | React.JSX.Element | string;
  className?: string;
  placement?: "top" | "right" | "bottom" | "left";
  onOpen?: () => void;
  onClose?: () => void;
  target?: React.RefObject<HTMLElement>;
}

interface ILabeledId {
  id: string;
  label: string;
}

interface IPerformerCardProps {
  performer: Performer;
  containerWidth?: number;
  ageFromDate?: string;
  selecting?: boolean;
  selected?: boolean;
  zoomIndex?: number;
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
  extraCriteria?: IPerformerCardExtraCriteria;
}

export interface IPerformerCardExtraCriteria {
  scenes?: Scene[];
  images?: Image[];
  galleries?: Gallery[];
  groups?: Group[];
  performer?: ILabeledId;
}

interface ISceneCardProps {
  scene: Scene;
  containerWidth?: number;
  previewHeight?: number;
  index?: number;
  queue?: any;
  compact?: boolean;
  selecting?: boolean;
  selected?: boolean | undefined;
  zoomIndex?: number;
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
}

interface IScenePreviewProps {
  isPortrait: boolean;
  image?: string;
  video?: string;
  soundActive: boolean;
  vttPath?: string;
  onScrubberClick?: (timestamp: number) => void;
}

interface IIcon {
  icon: IconDefinition;
  className?: string;
  color?: string;
  size?: SizeProp;
}

interface ISetting {
  id?: string;
  advanced?: boolean;
  className?: string;
  heading?: React.ReactNode;
  headingID?: string;
  subHeadingID?: string;
  subHeading?: React.ReactNode;
  tooltipID?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}

interface IBooleanSetting extends ISetting {
  id: string;
  checked?: boolean;
  onChange: (v: boolean) => void;
}
