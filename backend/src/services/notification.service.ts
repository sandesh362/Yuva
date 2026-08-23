import { Notification } from '../models/index.js';
export const notify = (userId: string, type: string, title: string, message: string, relatedId?: string) => Notification.create({ userId, type, title, message, relatedId });
