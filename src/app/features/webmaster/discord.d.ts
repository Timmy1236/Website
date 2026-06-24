declare global {
  interface Window {
    discordProfileCache?: Data;
  }
}

export interface LanyardResponse {
  data: Data;
  success: boolean;
}

export interface Data {
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
}

export interface ActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface Activity {
  application_id: string;
  buttons: string[];
  created_at: number;
  details: string;
  id: string;
  name: string;
  platform: string;
  session_id: string;
  state: string;
  type: number;
  assets?: ActivityAssets;
}

export interface DiscordUser {
  avatar: string;
  bot: boolean;
  discriminator: string;
  display_name: string;
  display_name_styles: null;
  global_name: string;
  id: string;
  public_flags: number;
  username: string;
}