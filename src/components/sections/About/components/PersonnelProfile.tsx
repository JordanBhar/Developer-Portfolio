import { Images } from '../../../../constants/app';
import { aboutData } from '../../../../data/about';
import '../styles/holographic.css';

const PersonnelProfile = () => {
  const profile = aboutData.personnelProfile;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Holographic Frame Container */}
      <div className="relative w-80 h-80 mx-auto animate-float">
        {/* Main frame with corners */}
        <div className="holographic-frame relative w-full h-full overflow-hidden">
          {/* Corner brackets */}
          <div className="holographic-frame-top-right absolute" />
          <div className="holographic-frame-bottom-left absolute" />

          {/* Profile Image */}
          <img
            src={Images.aboutMe}
            alt="Personnel Profile"
            className="w-full h-full object-cover"
          />

          {/* Scanline effect overlay */}
          <div className="scanline-effect" />
        </div>
      </div>

      {/* Personnel ID Display */}
      <div className="w-full max-w-80 personnel-id-display rounded-lg p-4 space-y-3">
        <div className="personnel-id-label">
          📡 PERSONNEL_ID
        </div>
        <div className="personnel-id-name font-mono">
          {profile.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="personnel-status">Designation</span>
          <span className="text-accent-cyan text-xs font-mono">{profile.designation}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="personnel-status">Clearance</span>
          <span className="text-accent-light-cyan text-xs font-mono">{profile.clearanceLevel}</span>
        </div>
        <div className="flex items-center gap-2 pt-2 border-t border-border-dark/30">
          <div className="status-indicator">
            <div className="status-dot" />
            {profile.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonnelProfile;
