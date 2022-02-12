import { Mutation, Query, Resolver, Args } from "type-graphql";
import { Inject } from "typedi";
import { Video } from "../../entities/Video.schema";
import { IVideosRepository } from "../../repositories/Videos/IVideosRepository";
import { VideosRepository } from "../../repositories/Videos/VideosRepository";
import { VideoInput } from "./Video.input";

@Resolver(Video)
export class VideoResolver {
    constructor(
        @Inject(() => VideosRepository) private videosRepo: IVideosRepository
    ) {}

    @Query(() => [Video])
    async videos() {
        const videos = await this.videosRepo.find();
        return videos;
    }

    @Mutation(() => Video)
    async createVideo(
        @Args() videoInput: VideoInput
    ) {
        const video = this.videosRepo.create(videoInput);
        await this.videosRepo.save(video);
        return video;
    }
}