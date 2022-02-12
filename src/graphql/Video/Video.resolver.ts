import { Mutation, Query, Resolver, Args } from "type-graphql";
import { Inject } from "typedi";
import { Video } from "../../entities/Video.schema";
import { IVideosRepository } from "../../repositories/Videos/IVideosRepository";
import { VideosRepository } from "../../repositories/Videos/VideosRepository";
import { FindByIdArgs, VideoInput } from "./Video.input";

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

    @Query(() => Video)
    async findById(
        @Args() { id }: FindByIdArgs
    ) {
        const video = await this.videosRepo.findById(id);
        return video;
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