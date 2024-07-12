import { Input } from '@/components/shadcn-ui/input';
import { ThemeButton } from '@/preview/theme-toggle.component';

export default function ThemingGuide() {
  return (
    <>
      <p>By default we are sticking to use the existing shadcn styles.</p>
      <p>
        The components we install from shadcn already come with these styles. That means have a look
        which properties the shadcn components expect (so that they will set their style themselves)
        and use them accordingly.
      </p>
      <div className="pr-flex pr-items-center pr-gap-2">
        Try it: change theme to
        <ThemeButton />
      </div>
      <p>
        Shadcn already provides theming, defining the current theme values in{' '}
        <code>styling.css</code>. You can easily test if your component adheres to the concept (and
        so can be themed) by using the dark mode toggle (upper right corner).
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              Bad example<div className="pr-text-xs">manual styles, unable to be themed</div>
            </td>
            <td>
              <Input
                value="This is some text"
                className="pr-box-border pr-gap-2.5 pr-rounded-lg pr-border pr-border-solid pr-border-black pr-bg-white pr-py-2 pr-pl-4 pr-pr-3 pr-font-medium pr-text-slate-900 pr-shadow-none pr-outline-none"
              />
            </td>
          </tr>
          <tr>
            <td>
              Good example
              <div className="pr-text-xs">theme-able by using the default styles</div>
            </td>
            <td>
              <Input
                value="This is some text"
                className="pr-full pr-file:border-0 pr-col-span-2 pr-flex pr-h-8 pr-rounded-md pr-border pr-border-input pr-bg-background pr-px-3 pr-py-2 pr-text-sm pr-ring-offset-background file:pr-bg-transparent file:pr-text-sm file:pr-font-medium placeholder:pr-text-muted-foreground focus-visible:pr-outline-none focus-visible:pr-ring-2 focus-visible:pr-ring-ring focus-visible:pr-ring-offset-2 disabled:pr-cursor-not-allowed disabled:pr-opacity-50"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
