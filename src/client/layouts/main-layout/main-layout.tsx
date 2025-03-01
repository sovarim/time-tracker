import { Sidebar } from '@/client/widgets/sidebar';

export const MainLayout = () => {
  return (
    <div className='h-full'>
      <Sidebar />
      <button
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - добавьте типы для window.electronAPI позже
          window.electronAPI.createUser({ firstName: 'asdf', lastName: 'asfsdfdsf' });
        }}
      >
        Click
      </button>
    </div>
  );
};
