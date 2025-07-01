import clsx from "clsx";
import { Disclosure } from "@headlessui/react";
import { Heading } from "@/components/ui/heading";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

// const navigation = [
//   { name: "Tutorial", href: "#", current: true },
//   {
//     name: "Triggers",
//     current: false,
//     children: [
//       { name: "Engineering", href: "#" },
//       { name: "Human Resources", href: "#" },
//       { name: "Customer Success", href: "#" },
//     ],
//   },
//   {
//     name: "Updates",
//     current: false,
//     children: [
//       { name: "GraphQL API", href: "#" },
//       { name: "iOS App", href: "#" },
//       { name: "Android App", href: "#" },
//       { name: "New Customer Portal", href: "#" },
//     ],
//   },
//   {
//     name: "Views",
//     href: "#",
//     current: false,
//     children: [{ name: "GraphQL API", href: "#" }],
//   },
//   { name: "Saved Queries", href: "#", current: false },
//   { name: "Community", href: "#", current: false },
// ];

export const QueryExplorer = ({
  className,
  queries,
  loadQuery,
}: {
  className: string;
  loadQuery: Function;
  queries: Map<string, Array<Record<string, string>>>;
}) => {
  const navigation = Array.from(queries.keys()).map((key) => ({
    name: key,
    current: false,
    children: Array.from(queries.get(key) ?? []).map((query) => ({
      name: query.fileName,
      content: query.content,
      current: false,
    })),
  }));
  return (
    <div className={className}>
      <nav className="flex flex-1 flex-col">
        <Heading>Query Explorer</Heading>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      className={clsx(
                        item.current ? "bg-stash-600" : "hover:bg-stash-600/20",
                        "capitalize block rounded-md py-2 pr-2 pl-10 text-sm/6 font-semibold text-stash-100",
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <Disclosure.Button
                        className={clsx(
                          item.current ? "bg-gray-50" : "hover:bg-stash-600/20",
                          "capitalize group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-200",
                        )}
                      >
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-token-keyword group-data-open:rotate-90 group-data-open:text-token-keyword"
                        />
                        {item.name}
                      </Disclosure.Button>
                      <Disclosure.Panel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <Disclosure.Button
                              onClick={(e) => {
                                e.preventDefault();
                                loadQuery({
                                  fileName: subItem.name,
                                  content: subItem.content,
                                });
                              }}
                              className={clsx(
                                " truncate w-full text-left",
                                "hover:bg-stash-600/20",
                                "block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-400",
                              )}
                            >
                              {subItem.name}
                            </Disclosure.Button>
                          </li>
                        ))}
                      </Disclosure.Panel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
