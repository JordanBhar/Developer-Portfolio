import { Images } from '../../../../constants/app';

const PersonnelProfile = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Profile Image Container */}
      <div className="w-80 h-80 bg-gradient-to-br from-accent-teal to-accent-cyan rounded-lg mx-auto animate-float">
        <img
          src={Images.aboutMe}
          alt="Personnel Profile"
          className="w-full h-full object-cover rounded-lg border-4 border-border-light"
        />
      </div>

      {/* Personnel ID Badge */}
      <div className="w-full max-w-80 p-4 bg-card-darker border border-border-dark/50 rounded-lg text-center space-y-2">
        <div className="text-accent-cyan text-sm font-mono">PERSONNEL_ID</div>
        <div className="text-text-primary font-mono text-lg font-bold">JORDAN_BHAR</div>
        <div className="text-text-muted text-xs font-mono">Status: ACTIVE</div>
      </div>
    </div>
  );
};

export default PersonnelProfile;
