type ContentLayoutProps = {
  children: React.ReactNode;
}

const ContentLayout = ({children}: ContentLayoutProps) => {
  return (
    <div className='max-w-[1800px] mx-auto px-4'>{children}</div>
  )
}

export default ContentLayout