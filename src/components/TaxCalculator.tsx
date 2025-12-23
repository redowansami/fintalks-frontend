import { Icon } from '@iconify/react';
import '../styles/SidebarComponents.css';

export const TaxCalculator: React.FC = () => {
	return (
		<div className="sidebar-card">
			<div className="card-header">
				<span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>
					<Icon icon="flat-color-icons:calculator" />
				</span>
				<div className="card-title">Tax Calculator</div>
			</div>
			<form className="space-y-4">
				<div className="form-group">
					<label className="form-label">Annual Income ($)</label>
					<input className="form-input" type="number" placeholder="50000" />
				</div>
				<div className="form-group">
					<label className="form-label">Filing Status</label>
					<select className="form-select">
						<option>Single</option>
						<option>Married Jointly</option>
						<option>Head of Household</option>
					</select>
				</div>
				<button className="btn-calculate" type="button">
					Calculate Now
				</button>
			</form>
		</div>
	);
};
