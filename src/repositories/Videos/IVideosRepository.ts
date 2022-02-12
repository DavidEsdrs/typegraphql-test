import { Video } from "../../entities/Video.schema";

export interface IVideosRepository {
    create(args: Partial<Omit<Video, "id" | "created_at" | "updated_at">>): Video;
    save(video: Video): Promise<void>;
    find(): Promise<Video[]>;
    findById(id: string): Promise<Video>;
}