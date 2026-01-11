export interface HeaderActionsProps {
	user: { username: string } | null;
	onCreateStory: () => void;
	onViewProfile: () => void;
	onLogout: () => void;
	onLogin: () => void;
}
