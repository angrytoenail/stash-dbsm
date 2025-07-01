import {
  HeartIcon,
  Bars3Icon,
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  CircleStackIcon,
  PlayCircleIcon,
  PhotoIcon,
  VideoCameraIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Scenes", href: "/scenes", icon: PlayCircleIcon, current: true },
  { name: "Galleries", href: "/galleries", icon: PhotoIcon, current: false },
  { name: "Performers", href: "/performers", icon: UserIcon, current: false },
  { name: "Studios", href: "/studios", icon: VideoCameraIcon, current: false },
  { name: "Tags", href: "/tags", icon: TagIcon, current: false },
];
const utilityLinks = [
  { name: "Donate", href: "/scenes", icon: HeartIcon, showTitle: true },
  { name: "Statistics", href: "/galleries", icon: ChartBarIcon },
  { name: "Settings", href: "/performers", icon: CogIcon },
  { name: "Help", href: "/studios", icon: QuestionMarkCircleIcon },
  { name: "DBSM", href: "/tags", icon: CircleStackIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 bg-stash-light z-100"
    >
      <div className="mx-auto h-[47px] sm:px-6 lg:px-8 flex items-center">
        <div className="relative flex items-center w-full">
          <div className="flex flex-1 items-center justify-start">
            <div className="inline px-3">
              <a href="/">Stash</a>
            </div>

            <div className="hidden md:flex md:items-center md:ml-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-stash-dark text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium flex flex-row",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="ml-2.5">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center md:static md:inset-auto md:ml-6">
            {utilityLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  "text-gray-300 hover:bg-stash-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex flex-row",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.showTitle && (
                  <span className="ml-2.5 hidden lg:inline">{item.name}</span>
                )}
              </a>
            ))}
            <Disclosure.Button className="sm:hidden group relative inline-flex items-center justify-center rounded-md px-3 py-2 text-gray-300 hover:bg-stash-500 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-stash-dark text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-base font-medium flex flex-row items-center",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="ml-2.5">{item.name}</span>
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
