import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({collections, pages}) {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
          </li>
        ))}
        {pages.map((page) => (
          <li key={page.id}>
            <Link
              to={`/pages/${pages[0].title}`}
              className="block p-4 hover:opacity-80"
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    
  );
}
