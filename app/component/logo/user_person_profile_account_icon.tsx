const UserPersonProfileAccountIcon = ({ color }: { color: string }) => {
  return (
    <span className="w-10">
      <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M16,5C9.9,5,5,9.9,5,16c0,6.1,4.9,11,11,11s11-4.9,11-11C27,9.9,22.1,5,16,5z M16,10c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4  S13.8,10,16,10z M10.1,22.8c-0.3-0.2-0.5-0.5-0.8-0.8c3.3-3.7,9-4,12.7-0.7c0.2,0.2,0.5,0.4,0.7,0.7C19.4,25.7,13.8,26,10.1,22.8z" />
      </svg>
    </span>
  );
};

export default UserPersonProfileAccountIcon;
