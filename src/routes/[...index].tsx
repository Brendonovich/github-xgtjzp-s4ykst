import { A } from '@solidjs/router';
import { isServer } from 'solid-js/web';
import Counter from '~/components/Counter';
import Test from '~/components/Test';

export default function Home() {
  console.log('Index', `server: ${isServer}`);
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Test />
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world! {Math.round(Math.random() * 100000)}
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {' - '}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{' '}
      </p>
    </main>
  );
}
