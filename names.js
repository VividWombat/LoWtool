export default function fGBname(city_entity) {
	var GB_name = city_entity;

		if (GB_name == "X_AllAge_EasterBonus4") 
			GB_name = "Observatory";
		else if (GB_name == "X_AllAge_Expedition") 
			GB_name = "Temple of Relics";
		else if (GB_name == "X_BronzeAge_Landmark1") 
			GB_name = "Tower of Babel";
		else if (GB_name == "X_BronzeAge_Landmark2") 
			GB_name = "Statue of Zeus";
		else if (GB_name == "X_IronAge_Landmark2") 
			GB_name = "Lighthouse of Alexandria";
		else if (GB_name == "X_EarlyMiddleAge_Landmark1") 
			GB_name = "Hagia Sophia";
		else if (GB_name == "X_EarlyMiddleAge_Landmark2") 
			GB_name = "Cathedral of Aachen";
		else if (GB_name == "X_HighMiddleAge_Landmark1") 
			GB_name = "St. Mark's Basilica";
		else if (GB_name == "X_HighMiddleAge_Landmark3") 
			GB_name = "Notre Dame";
		else if (GB_name == "X_LateMiddleAge_Landmark3") 
			GB_name = "Castel del Monte";
		else if (GB_name == "X_ColonialAge_Landmark1") 
			GB_name = "Frauenkirche of Dresden";
		else if (GB_name == "X_ColonialAge_Landmark2") 
			GB_name = "Deal Castle";
		else if (GB_name == "X_IndustrialAge_Landmark1") 
			GB_name = "Royal Albert Hall";
		else if (GB_name == "X_ProgressiveEra_Landmark1") 
			GB_name = "Alcatraz";
		else if (GB_name == "X_ProgressiveEra_Landmark2") 
			GB_name = "Ch\u00e2teau Frontenac";
		else if (GB_name == "X_PostModernEra_Landmark1") 
			GB_name = "Cape Canaveral";
		else if (GB_name == "X_ContemporaryEra_Landmark2") 
			GB_name = "Innovation Tower";
		else if (GB_name == "X_TomorrowEra_Landmark1") 
			GB_name = "Voyager V1";
		else if (GB_name == "X_TomorrowEra_Landmark2") 
			GB_name = "Dynamic Tower";
		else if (GB_name == "X_FutureEra_Landmark1") 
			GB_name = "The Arc";
		else if (GB_name == "X_FutureEra_Landmark2") 
			GB_name = "Rain Forest Project";
		else if (GB_name == "X_ArcticFuture_Landmark2") 
			GB_name = "Arctic Orangery";
		else if (GB_name == "X_OceanicFuture_Landmark1") 
			GB_name = "Atlantis Museum";
		else if (GB_name == "X_OceanicFuture_Landmark2") 
			GB_name = "The Kraken";
		else if (GB_name == "X_OceanicFuture_Landmark3") 
			GB_name = "The Blue Galaxy";
		else if (GB_name == "X_VirtualFuture_Landmark1") 
			GB_name = "Terracotta Army";
		else if (GB_name == "X_VirtualFuture_Landmark2") 
			GB_name = "Himeji Castle";
		
		return GB_name;	
}